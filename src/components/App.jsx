import './App.css'
import Footer from './Footer'
import Header from './Header'
import Image from './Image'
import Text from './Text'
import Title from './Title'

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Title>Git</Title>
        <Image link="https://media.giphy.com/media/myRQnhrdKEryxF6xSK/giphy.gif" />
        <Text>Git é um sistema de controle de versões distribuído. Ele monitora alterações feitas no código e permite programadores ver o histórico assim como voltar para uma versão anterior. Ele também facilita a colaboração entre desenvolvedores, facilitando a resolução de conflitos. </Text>
      </div>
      <div className='container'>
        <Title>HTML</Title>
        <Image link="https://media.giphy.com/media/IN4dsF2iwSJ3N9jDZb/giphy.gif" />
        <Text>O HTML (HiperText Markup Language) traduzido do inglês Marcação de Hipertexto. É uma linguagem de marcação que permite o desenvolvimento de uma estrutura básica de uma página da web. É como se fosse um esqueleto do site que permite a organização das páginas. Dentro dele, é possível adicionar textos, imagens, links, videos, entre outras coisas. </Text>
      </div>
      <div className='container'>
        <Title>CSS</Title>
        <Image link="https://media.giphy.com/media/0fRjvlfSu2koMzg1XP/giphy.gif" />
        <Text>Cascading Style Sheets, mais conhecido como CSS, é uma linguagem de estilo utilizada para estilizar páginas web escritas em HTML. Ele permite alterar coisas como o posicionamento, a cor, o tamanho, a borda e outros atributos de elementos como textos e imagens. </Text>
      </div>
      <div className='container'>
        <Title>JAVASCRIPT</Title>
        <Image link="https://media.giphy.com/media/KXlTUvqz5fNbq/giphy.gif" />
        <Text>O JavaScript (não confundir com Java!) é uma linguagem de programação que torna páginas web interativas. Junto com o HTML e o CSS, ele forma um dos pilares da internet como a conhecemos. Ele possibilita, por exemplo, expandir um menu clicando em um botão. </Text>
      </div>
      <Footer />
    </div>
  )
}
