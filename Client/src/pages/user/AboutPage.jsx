import { NavLink } from "react-router-dom";


export default function AboutPage() {
  return (
    <div className="about">
      <header className="about__hero">
        <h1>What is YogaGarden?</h1>
        <p>An online school for the study and teaching of yoga.</p>
      </header>
      
      <div className="about__body">
        <section className="about__body--approach">
          <h2>Our approach</h2>
          
          <p>YogaGarden is an online school for people who want to go beyond practising yoga and learn how to understand, structure and teach it.</p>

          <p>Instead of treating yoga as a collection of ready-made classes, YogaGarden brings together a growing library of techniques, educational resources and research that can be explored, compared and put into practice.</p>

          <p>Study an āsana. Explore its context and applications. Build a sequence. Question what you have been taught. Discover different perspectives. Then use what you have learned to develop your own practice and teaching.</p>

          <p>YogaGarden is built around a simple idea: teachers should not only know what to teach — they should understand why they teach it.</p>
        </section>

        <section className="about__body--method">
          <h2>The YogaGarden method</h2>

          <p>Our courses are presented as states of the question.</p>
          <p>Rather than treating a subject as a collection of definitive answers, we examine what is currently known about it: the available evidence, the different interpretations that have emerged, the sources on which those interpretations are based and the questions that remain unresolved.</p>
          <p>This means that uncertainty is not something to hide. When the available knowledge is incomplete or contradictory, we believe students should be able to see that clearly.</p>
          <p>Learning therefore becomes an ongoing process of investigation rather than the simple accumulation of conclusions.</p>
        </section>

        <section className="about__body--library-teachers">
          <h2>A library for teachers</h2>

          <p>A teacher needs more than a repertoire of familiar poses. They need to understand the practices they use and be able to work with them purposefully.</p>

          <p>The YogaGarden Library brings together a broad collection of yoga techniques, including āsana, prāṇāyāma, meditation, relaxation and concentration practices.</p>

          <p>Each technique can be explored through the information available in the library, allowing students and teachers to study practices individually before incorporating them into a broader practice.</p>

          <p>The Class Builder allows teachers to put that knowledge into practice by creating and experimenting with their own sequences.</p>

          <p>In this way, the library is not simply a catalogue of techniques. It is a working resource for study, practice and teaching.</p>
        </section>

        <section className="about__body--student-to-teacher">
          <h2>From student to teacher</h2>

          <p>At YogaGarden, we see teacher development as a continuous progression:</p>

          <p>Study → Understand → Practice → Teach</p>

          <p>The objective is not simply to give students more techniques to teach. It is to help them develop the understanding and judgement required to use those techniques appropriately.</p>
        </section>

        <section className="about__body--teachers">
          <h2>Our teachers</h2>

          <p>Yoga is a diverse field, and no single teacher can represent every tradition, perspective or area of knowledge.</p>

          <p>YogaGarden brings together teachers and educators with different backgrounds and areas of expertise. What they share is a commitment to continued study, responsible teaching and intellectual curiosity.</p>

          <p>Our teachers contribute their experience not only as practitioners, but as educators who continue to question, investigate and learn.</p>

          <div className="about__body--teachers-LST">
            <div>
              <img />
              <h4>[Teacher Name]</h4>
              <p>Yoga Teacher · [Specialisation]</p>
              <p>[Short biography.]</p>
            </div>

            <div>
              <img />
              <h4>[Teacher Name]</h4>
              <p>Yoga Teacher · [Specialisation]</p>
              <p>[Short biography.]</p>
            </div>

            <div>
              <img />
              <h4>[Teacher Name]</h4>
              <p>Yoga Teacher · [Specialisation]</p>
              <p>[Short biography.]</p>
            </div>
          </div>
        </section>

        <section className="about__body--research">
          <h2>Research & critical thinking</h2>

          <p>Yoga has been transmitted through traditions, texts, teachers and lived practice for centuries. At the same time, modern research continues to investigate many aspects of yoga and its effects.</p>

          <p>These sources do not always provide simple or consistent answers.</p>

          <p>YogaGarden encourages students to examine claims carefully, consider the quality and limitations of available evidence, and recognise when a statement represents tradition, interpretation, personal experience or established research.</p>

          <p>YogaGarden does not ask you to stop questioning.</p>

          <p>We believe that curiosity and critical thinking are essential parts of serious study.</p>
        </section>

        <section className="about__body--commitment">
          <h2>Our Commitment</h2>

          <p>We believe teachers should be able to distinguish between tradition, personal experience, interpretation and evidence. They should also understand the limits of their knowledge and communicate those limits honestly.</p>

          <p>YogaGarden therefore aims to promote responsible teaching, intellectual curiosity and continuous learning.</p>

          <p>We do not claim to have the final answer to every question. We aim to provide students with the tools to investigate those questions themselves.</p>
        </section>

        <section className="about__body--CTA">
          <h2>Begin your journey</h2>

          <p>Whether you are beginning your study of yoga or looking to deepen your knowledge as a teacher, YogaGarden provides a space to learn, question and explore.</p>

          <p>Explore <NavLink to="/courses">our courses</NavLink></p>
        </section>
      </div> 
    </div>
  )
}
