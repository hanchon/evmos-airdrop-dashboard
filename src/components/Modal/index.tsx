/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import Text from '@components/Text';
import CloseIcon from '@images/icons/CloseIcon';

import cn from 'classnames';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import css from './index.module.css';

export type ModalProps = React.HTMLProps<HTMLDivElement> & {
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
  className,
  ...restProps
}) => {
  const el$ = document.getElementById('modal-root');
  const classes = cn(className, css.modal);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const escapeHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (!isOpen || !ref.current) {
      return () => window.removeEventListener('keydown', escapeHandler);
    }

    window.addEventListener('keydown', escapeHandler);

    return () => window.removeEventListener('keydown', escapeHandler);
  }, [isOpen]);

  if (!el$ || !isOpen) {
    return null;
  }
  return createPortal(
    <div
      className={classes}
      ref={ref}
      onClick={e => (e.target === ref.current ? onClose() : null)}
      {...restProps}
    >
      <div className={css.wrapper}>
        <Text type="value" className={css.title} spacing={4}>
          {title}
        </Text>
        <CloseIcon
          className={css.closeIcon}
          tabIndex={0}
          onClick={() => onClose()}
        />
        {children}
      </div>
    </div>,
    el$,
  );
};

export default Modal;
