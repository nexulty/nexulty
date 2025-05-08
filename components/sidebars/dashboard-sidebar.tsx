type Props = {
  domain: string
}

export default function DashboardSidebar({ domain }: Props) {
  return <aside>{domain}</aside>
}
