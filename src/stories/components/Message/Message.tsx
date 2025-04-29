import React, { useMemo } from 'react';
import { type MessagesMessage } from 'primereact/messages';
import { Button, ButtonProps } from 'primereact/button';
import cn from 'classnames';
import {
  IconAlertCircle,
  IconCircleCheck,
  IconCircleX,
  IconInfoCircle,
  IconX,
} from '@tabler/icons-react';

export interface MessageProps extends MessagesMessage {
  children?: React.ReactNode;
  dataTest?: string;
  className?: string;
  isAlignCenterTitle?: boolean;
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: (value: boolean) => void;
  closeMessage?: string;
  withoutIcon?: boolean;
}

const icons = {
  info: <IconInfoCircle />,
  error: <IconCircleX />,
  success: <IconCircleCheck />,
  warn: <IconAlertCircle />,
  secondary: <IconInfoCircle />,
  contrast: <IconInfoCircle />,
};

const buttonSeverity: Record<string, ButtonProps['severity']> = {
  error: 'danger',
  warn: 'warning',
  info: 'info',
  success: 'success',
  secondary: 'secondary',
  contrast: 'contrast',
};

const Message: React.FC<MessageProps> = ({
  severity = 'info',
  summary,
  detail,
  icon,
  children,
  dataTest,
  className,
  isAlignCenterTitle,
  closable = false,
  onClose,
  closeMessage = 'Hide Message',
  withoutIcon = false,
}) => {
  const handleClick = () => {
    if (onClose) {
      onClose(false);
    }
  };

  const defaultIcon = useMemo(() => icons[severity] ?? icons.info, [severity]);
  // Добавил прямую проверку, чтобы не ломать мозг в шаблоне
  const isExistsIcon = useMemo(() => Boolean(icon), [icon]);

  return (
    <div
      className={cn(
        'p-message p-component p-message-enter-done',
        `p-message-${severity}`,
        className
      )}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-pc-name="messages"
      data-pc-section="root"
    >
      <div className="p-message-wrapper" data-pc-section="wrapper">
        <div className="flex flex-col gap-4">
          <div className={cn('flex', isAlignCenterTitle && 'items-center')}>
            {!withoutIcon && (
              <div className={cn('p-message-icon')}>
                {!isExistsIcon && defaultIcon}
                {isExistsIcon && icon}
              </div>
            )}
            <div
              className={cn([
                'grow',
                !summary || !detail
                  ? 'flex items-center'
                  : 'flex flex-col gap-1',
              ])}
            >
              {summary ? (
                <div
                  className="p-message-summary line-height-normal"
                >
                  {summary}
                </div>
              ) : null}
              {detail ? (
                <div
                  className="p-message-detail line-height-normal"
                >
                  {detail}
                </div>
              ) : null}
            </div>
            {closable && (
              <Button
                className="ml-3"
                size="small"
                severity={buttonSeverity[severity]}
                outlined
                icon={<IconX />}
                aria-label={closeMessage}
                onClick={handleClick}
              />
            )}
          </div>
          {children && (
            <div>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Message);
