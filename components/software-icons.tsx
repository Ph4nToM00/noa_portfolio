import React from 'react'
import { cn } from '@/lib/utils'

interface IconProps {
  className?: string
}

export const PremiereProIcon: React.FC<IconProps> = ({ className }) => (
  <img 
    src="/icons/adobepremierepro-svgrepo-com.svg"
    alt="Premiere Pro" 
    width={24} 
    height={24} 
    className={cn('dark:invert', className)}
  />
)

export const AfterEffectsIcon: React.FC<IconProps> = ({ className }) => (
  <img 
    src="/icons/adobe-after-effects-svgrepo-com.svg"
    alt="After Effects" 
    width={24} 
    height={24} 
    className={cn('dark:invert', className)}
  />
)

export const DaVinciResolveIcon: React.FC<IconProps> = ({ className }) => (
  <img 
    src="/icons/davinciresolve.svg"
    alt="DaVinci Resolve" 
    width={24} 
    height={24} 
    className={cn('dark:invert', className)}
  />
)

export const NotionIcon: React.FC<IconProps> = ({ className }) => (
  <img 
    src="/icons/notion.svg"
    alt="Notion" 
    width={24} 
    height={24} 
    className={cn('dark:invert', className)}
  />
) 