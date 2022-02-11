/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

import Text from '@components/Text';
import CloseIcon from '@images/icons/CloseIcon';

import cn from 'classnames';
import css from './index.module.css';

export type ModalDOMProps = React.HTMLProps<HTMLDivElement>;
export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

export const useModal = (
  defaultValue: boolean = false,
): [any, Pick<ModalProps, 'isOpen' | 'onClose'>] => {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);

  return [
    {
      isOpen,
      open,
      close,
    },
    { isOpen, onClose: close },
  ];
};

const Modal: React.FC<ModalDOMProps & ModalProps> = ({
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

  useEffect(() => {
    document.getElementsByTagName('body')[0].style.overflow = isOpen
      ? 'hidden'
      : 'auto';
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
