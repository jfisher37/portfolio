const contact = () => {
    return `
    <div id=contact-page>
    <p2 id="contact-label">
        Contact Me
    </p2>
    <form id="contact-form" name="contact-form" data-netlify="true" method="POST">
        <section id="name-email">
        <label for="name" id="name-label">
            Name:
        </label>
        <input name="name" type="text" placeholder="Name" id="name-input" required>
        <label for="email" id="email-label">
            Email:
        </label>
        <input name="email" type="text" placeholder="Email" id="email-input" required>
    </section>
    <section id="message-contain">
        <label for="message" id="message-label">
            Message:
        </label>
        <textarea name="message" id="message-input" placeholder="Your message here" required></textarea>
    <section id="button-contain">
        <button id=contact-button type="submit" class="not-submitted"><p>Submit</p></button>
    </section>
    </section>
    </form>
    <p id="thanks-for-message"></p>
</div>
    `
}

export default contact;