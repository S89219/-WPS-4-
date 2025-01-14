/**
 * External dependencies
 */
import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';

/**
 * Internal dependencies
 */
import type Popover from '../popover';
import type { PopoverProps } from '../popover/types';

type CallbackProps = {
	isOpen: boolean;
	onToggle: () => void;
	onClose: () => void;
};

export type DropdownContentWrapperProps = {
	/**
	 * Amount of padding to apply on the dropdown content.
	 *
	 * @default 'small'
	 */
	paddingSize?: 'none' | 'small' | 'medium';
};

export type DropdownProps = {
	/**
	 * The className of the global container.
	 */
	className?: string;
	/**
	 * If you want to target the dropdown menu for styling purposes,
	 * you need to provide a contentClassName because it's not being rendered
	 * as a child of the container node.
	 */
	contentClassName?: string;
	/**
	 * Opt-in prop to show popovers fullscreen on mobile.
	 *
	 * @default false
	 */
	expandOnMobile?: boolean;
	/**
	 * By default, the first tabbable element in the popover will receive focus
	 * when it mounts. This is the same as setting this prop to "firstElement".
	 * Specifying a true value will focus the container instead.
	 * Specifying a false value disables the focus handling entirely
	 * (this should only be done when an appropriately accessible
	 * substitute behavior exists).
	 *
	 * @default 'firstElement'
	 */
	focusOnMount?: 'firstElement' | boolean;
	/**
	 * Set this to customize the text that is shown in the dropdown's header
	 * when it is fullscreen on mobile.
	 */
	headerTitle?: string;
	/**
	 * A callback invoked when the popover should be closed.
	 */
	onClose?: () => void;
	/**
	 * A callback invoked when the state of the popover changes
	 * from open to closed and vice versa.
	 * The callback receives a boolean as a parameter.
	 * If true, the popover will open.
	 * If false, the popover will close.
	 */
	onToggle?: ( willOpen: boolean ) => void;
	/**
	 * Properties of popoverProps object will be passed as props
	 * to the Popover component.
	 * Use this object to access properties/features
	 * of the Popover component that are not already exposed
	 * in the Dropdown component,
	 * e.g.: the ability to have the popover without an arrow.
	 */
	popoverProps?: Omit<
		ComponentPropsWithoutRef< typeof Popover >,
		'children'
	>;
	/**
	 * The direction in which the popover should open
	 * relative to its parent node.
	 * Specify a y- and an x-axis as a space-separated string.
	 * Supports "top", "bottom" y-axis,
	 * and "left", "center", "right" x-axis.
	 *
	 * @default 'top center'
	 */
	position?: PopoverProps[ 'position' ];
	/**
	 * A callback invoked to render the content of the dropdown menu.
	 * Its first argument is the same as the renderToggle prop.
	 */
	renderContent: ( props: CallbackProps ) => ReactNode;
	/**
	 * A callback invoked to render the Dropdown Toggle Button.
	 *
	 * The first argument of the callback is an object
	 * containing the following properties:
	 *
	 * - isOpen: whether the dropdown menu is opened or not
	 * - onToggle: A function switching the dropdown menu's state
	 * from open to closed and vice versa
	 * - onClose: A function that closes the menu if invoked
	 */
	renderToggle: ( props: CallbackProps ) => ReactNode;
	/**
	 * The style of the global container.
	 */
	style?: CSSProperties;
};
