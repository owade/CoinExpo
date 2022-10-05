import { HeaderMenuColored } from '../../components/Header/Header';
import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';


export default function Layout({ children }: { children: React.ReactNode }) {
  const links = [
    { link: "/trending", label: "Trending"},
    { link: "/chain", label: "Chains"},
    { link: "/market", label: "Markets" },
  ]

  return (
    <>
      <HeaderMenuColored links={links} />
      <main>{children}</main>
    </>
  )
}