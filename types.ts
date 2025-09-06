export type Service = {
  id: number | string
  title: string
  description: string
  category?: string
  imageUrl?: string
}

export type Product = {
  id: number | string
  title: string
  description: string
  category?: string
  imageUrl?: string
}

export type DemoScheduleRequest = {
  name: string
  email: string
  phone: string
  interest: string
  preferredDateTime: string
}
