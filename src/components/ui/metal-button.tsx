import React, { forwardRef } from "react"
import { MetalFx, type MetalFxPreset } from "metal-fx"
import { cn } from "@/lib/utils"

export interface MetalButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  preset?: MetalFxPreset
  theme?: "auto" | "dark" | "light"
  strength?: number
  paused?: boolean
  borderRadius?: number
  disableGlow?: boolean
  reflectionTargets?: ReadonlyArray<React.RefObject<HTMLElement | null>>
  shaderScale?: number
  ringCssPx?: number
  scale?: number
  normalizeHostStyles?: boolean
  metalVariant?: "button" | "circle"
  metalFxClassName?: string
  metalFxStyle?: React.CSSProperties
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link"
}

export const MetalButton = forwardRef<HTMLButtonElement, MetalButtonProps>(
  function MetalButton(
    {
      metalVariant = "button",
      metalFxClassName,
      metalFxStyle,
      preset = "chromatic",
      theme = "auto",
      strength = 0.9,
      paused,
      borderRadius,
      disableGlow,
      reflectionTargets,
      shaderScale,
      ringCssPx,
      scale,
      normalizeHostStyles = true,
      variant = "default",
      className,
      children,
      style,
      ...buttonProps
    },
    ref
  ) {
    return (
      <MetalFx
        borderRadius={borderRadius}
        className={cn(
          "metal-fx-wrapper",
          normalizeHostStyles && `metal-variant-${variant}`,
          metalFxClassName
        )}
        disableGlow={disableGlow}
        normalizeHostStyles={normalizeHostStyles}
        paused={paused}
        preset={preset}
        reflectionTargets={reflectionTargets}
        ringCssPx={ringCssPx}
        scale={scale}
        shaderScale={shaderScale}
        strength={strength}
        style={{
          overflow: 'visible',
          display: 'inline-flex',
          width: 'fit-content',
          minWidth: 0,
          flexDirection: 'column',
          alignItems: 'stretch',
          lineHeight: 'none',
          position: 'relative',
          borderRadius: borderRadius ? `${borderRadius}px` : 'inherit',
          ...metalFxStyle
        }}
        theme={theme}
        variant={metalVariant}
      >
        <button
          ref={ref}
          className={cn("metal-btn-element", className)}
          style={{
            border: 'none',
            background: 'transparent',
            boxShadow: 'none',
            outline: 'none',
            cursor: 'pointer',
            padding: '12px 24px',
            fontSize: '0.875rem',
            fontWeight: 600,
            borderRadius: 'inherit',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'inherit',
            fontFamily: 'inherit',
            width: '100%',
            height: '100%',
            ...style
          }}
          {...buttonProps}
        >
          {children}
        </button>
      </MetalFx>
    )
  }
)

MetalButton.displayName = "MetalButton"

export const MetalIconButton = forwardRef<HTMLButtonElement, MetalButtonProps>(
  function MetalIconButton(
    { metalVariant = "circle", className, style, ...props },
    ref
  ) {
    return (
      <MetalButton
        className={cn("metal-icon-btn", className)}
        style={{
          padding: '8px',
          borderRadius: '50%',
          aspectRatio: '1',
          width: '36px',
          height: '36px',
          ...style
        }}
        metalVariant={metalVariant}
        ref={ref}
        {...props}
      />
    )
  }
)

MetalIconButton.displayName = "MetalIconButton"
