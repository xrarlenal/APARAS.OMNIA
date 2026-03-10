import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const items = [
  { id: 'conditions', label: '疾病词条', route: '/conditions' },
  { id: 'medications', label: '药物板块', route: '/medications' },
  { id: 'usage-docs', label: '用药文档', route: '/usage-docs' },
];

function SidebarServiceList() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div className="service-menu" ref={panelRef}>
      <button
        type="button"
        className="service-menu-button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="service-menu-panel"
      >
        板块导航
      </button>

      {open && (
        <div className="service-menu-layer">
          <button
            type="button"
            className="service-menu-backdrop"
            aria-label="关闭服务列表"
            onClick={() => setOpen(false)}
          />
          <nav id="service-menu-panel" className="service-menu-panel" aria-label="业务板块入口">
            <p className="sidebar-title">业务板块</p>
            <ul className="sidebar-list">
              {items.map((item, index) => {
                const active = location.pathname === item.route;
                return (
                  <li key={item.id}>
                    <Link
                      className={`sidebar-list-item${active ? ' is-active' : ''}`}
                      to={item.route}
                    >
                      <span className="sidebar-index">{String(index + 1).padStart(2, '0')}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default SidebarServiceList;
