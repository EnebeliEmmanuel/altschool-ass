import { Suspense } from "react"
import ThemeContextProvider from "./utils/contexts/ThemeContext";
import PostContextProvider from "./utils/contexts/PostContext";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import RoutePage from "./components/RoutePage";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
    return (
        <PostContextProvider>
            <ThemeContextProvider>
                <Suspense fallback={<Loader />}>
                    <ChakraProvider>
                    {/* <Layout /> */}
                    {/* substitute with layout component  */}
                    <RoutePage />
                    </ChakraProvider>
                </Suspense>
            </ThemeContextProvider>
        </PostContextProvider>

    );
}

export default App;
