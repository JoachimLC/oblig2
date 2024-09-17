type ContactProps = {
    email: string;
  };
  
  export default function Contact({ email }: ContactProps) {
    return (
      <section>
        <button onClick={() => alert(email)} type="button">Email</button>
      </section>
    );
  }