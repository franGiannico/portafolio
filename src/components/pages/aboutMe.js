const AboutMe = () => (
    <div>
        <main className="main">
            <section className="about-us section-container">          
                <div className="content-wrapper">
                    <article className="about-item">
                        <div className="image-container">
                            <img src="https://talently.tech/blog/wp-content/uploads/2020/11/soft-skills-para-programadores-1.png" alt="Foto sobre mí"/>                        
                        </div>
                        <div>
                            <h2>Sobre mí</h2>
                            <p>Me motiva mucho aprender y entender cómo funcionan las cosas. Cuando siento curiosidad por algo, me gusta desarmarlo hasta entender el funcionamiento de sus sistemas.<br></br>
                            Soy muy paciente y positivo frente a las adversidades. Siempre el vaso medio lleno.<br></br>
                            Busco aportar valor con mis conocimientos.
                            </p>                            
                        </div>
                    </article>
                    <article className="about-item">
                        <div className="image-container">
                            <img src="https://midu.dev/images/wallpapers/una-taza-de-javascript.png" alt="Taza JavaScript"/>                        
                        </div>
                        <div className="about-estudios">
                            <h2>Estudios</h2>
                                <h4>Carreras y cursos certificados por Academia EdTeam (Perú)</h4>
                                    <p>
                                        React Desde Cero /
                                        Desarrollo Web con Javascript /                                   
                                        Frontend Desde Cero /                                 
                                        Programación Web /
                                        Programación Desde Cero                                   
                                    </p>
                                    <a className="button"
                                    download
                                    href="https://www.linkedin.com/in/francisco-javier-giannico-villalobos-792363165/details/certifications/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >Ver mis certificados
                                    </a>              
                        </div>
                    </article>
                    <article className="about-item">
                        <div className="image-container">
                            <img src="https://miro.medium.com/max/1400/1*ppZttKEH7stAG6AGHOWM2g.png" alt="Heramientas"/>                        
                        </div>
                        <div>
                            <h2>Herramientas</h2>
                            <p>React: creación de componentes reutilizables, react routing, consumir servicios APIs, react hooks, manejo de estados. / JavaScript:
                            POO, clases y objetos, manejo y comunicación de los objetos, manipular el DOM. /
                            Sass: mixins y funciones, debug de errores, sourcemaps. /
                            Css: variables css, Flexbox, Grid, Responsive web design.
                            Git: crear repositorios, moverse en el historial del proyecto, trabajar con ramas locales y remotas.
                            </p>                            
                        </div>
                    </article>
                </div>            
            </section>
        </main>
    </div>
)


export default AboutMe