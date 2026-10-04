import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ToastHost } from './ToastHost';

const sw = vi.hoisted(() => ({
  state: { offlineReady: false, needRefresh: false },
  update: vi.fn(),
  setOffline: vi.fn(),
  setRefresh: vi.fn(),
}));

vi.mock('virtual:pwa-register/react', () => ({
  useRegisterSW: () => ({
    offlineReady: [sw.state.offlineReady, sw.setOffline],
    needRefresh: [sw.state.needRefresh, sw.setRefresh],
    updateServiceWorker: sw.update,
  }),
}));

describe('ToastHost', () => {
  beforeEach(() => {
    sw.state = { offlineReady: false, needRefresh: false };
    sw.update.mockReset();
  });

  it('shows nothing until the service worker reports something', () => {
    render(<ToastHost />);
    expect(screen.queryByRole('status')).toBeNull();
  });

  it('announces that offline use is ready and can be dismissed', () => {
    sw.state.offlineReady = true;
    render(<ToastHost />);
    expect(screen.getByRole('status')).toHaveTextContent('ใช้งานออฟไลน์ได้แล้ว');
    fireEvent.click(screen.getByRole('button', { name: 'ปิด' }));
    expect(sw.setOffline).toHaveBeenCalledWith(false);
  });

  it('offers a reload for a new version and activates it only on request', () => {
    sw.state.needRefresh = true;
    render(<ToastHost />);
    expect(screen.getByRole('status')).toHaveTextContent('มีเวอร์ชันใหม่ พร้อมใช้งาน');
    expect(sw.update).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: 'โหลดใหม่' }));
    expect(sw.update).toHaveBeenCalledWith(true);
  });
});
