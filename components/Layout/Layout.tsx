//import HeaderMenuColored from './Header/Header';
import { HeaderMenuColored } from '../../components/Header/Header';
import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';


export default function Layout({ children }: { children: React.ReactNode }) {
  const links = [
    { link: "A", label: "Trending", links: [{ link: "C", label: "Defi" }] },
    { link: "A", label: "Global", links: [{ link: "C", label: "Exchanges" }] },
    { link: "/market", label: "Markets" },
  ]

  return (
    <>
      <HeaderMenuColored links={links} />
      <main>{children}</main>
    </>
  )
}