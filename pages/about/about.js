const habilidades = ['HTML5', 'CSS3', 'JavaScript']
const About = () => {

    return (
 
       <div>
 
          <h1>Section About </h1>
          <Content />
          <Habilidades habilidades={habilidades} />

 
       </div>
 
    )
 
 }

export const Content = () => {

   return (
      <p>
         Olá, eu me chamo Joan, tenho 21 anos, sou aluno de Bacharelado em Sistemas da Informação,
         atualmente estou no 4º período. Minha matéria favorita é programação e tenho interesse em
         trabalhar com desenvolvimento Web e aplicativos mobile. 
      </p>
   )
}

export const Habilidades = ({habilidades}) => {
   return (
      <table>
         <thead>
            <tr>
               <th>Habilidades Técnicas</th>
            </tr>
            <tbody>
               <tr><td>{habilidades[0]}</td></tr>
               <tr><td>{habilidades[1]}</td></tr>
               <tr><td>{habilidades[2]}</td></tr>
            </tbody>
         </thead>
      </table>
   )
}
export default About