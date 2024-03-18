interface AppLayoutProps extends React.HTMLAttributes<HTMLDivElement> {

}

const AppLayout = ({children}: AppLayoutProps) => {
  return (
    <main className="mt-10 p-2 lg:ml-44">
      {children}
    </main>
  )
}

export default AppLayout