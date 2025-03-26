import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface IconProps {
  className?: string
}

export const PremiereProIcon: React.FC<IconProps> = ({ className }) => (
  <Image 
    src="/icons/adobepremierepro-svgrepo-com.svg"
    alt="Premiere Pro" 
    width={24} 
    height={24} 
    className={cn('dark:invert', className)}
    priority
  />
)

export const AfterEffectsIcon: React.FC<IconProps> = ({ className }) => (
  <Image 
    src="/icons/adobe-after-effects-svgrepo-com.svg"
    alt="After Effects" 
    width={24} 
    height={24} 
    className={cn('dark:invert', className)}
    priority
  />
)

export const DaVinciResolveIcon: React.FC<IconProps> = ({ className }) => (
  <Image 
    src="/icons/davinciresolve.svg"
    alt="DaVinci Resolve" 
    width={24} 
    height={24} 
    className={cn('dark:invert', className)}
    priority
  />
)

export const NotionIcon: React.FC<IconProps> = ({ className }) => (
  <Image 
    src="/icons/notion.svg"
    alt="Notion" 
    width={24} 
    height={24} 
    className={cn('dark:invert', className)}
    priority
  />
) 