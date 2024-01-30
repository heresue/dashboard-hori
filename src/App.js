import { ChakraProvider } from '@chakra-ui/react'
import Routers from './Routers'
import './assets/scss/style.scss'

function App() {
    return (
        <ChakraProvider> {/* chakra 레이아웃을 사용하겠다 */}
            <Routers/>
        </ChakraProvider>
    )
}

export default App


// 모든 설정은 여기에 추가한다 (스타일 등)