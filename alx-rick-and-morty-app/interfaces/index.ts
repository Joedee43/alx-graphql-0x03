import { ReactNode } from "react"

interface InfoProps {
    pages: number
    next: number
    prev: number
    count: number
}

export interface EpisodeProps {
  id: number
  name: string
  air_date: string
  episode: string
  info: InfoProps
}


export interface State {
  hasError: boolean;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export type EpisodeCardProps = Pick<EpisodeProps, 'id' | 'name'| 'air_date' | "episode">