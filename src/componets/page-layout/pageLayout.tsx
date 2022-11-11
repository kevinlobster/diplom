import { Header } from "../header/header"

export const PageLayout = ({children}:{children:React.ReactElement}) => {
    return (
        <div className="page-layout">
            <Header />
            {children}
        </div>
    )
}