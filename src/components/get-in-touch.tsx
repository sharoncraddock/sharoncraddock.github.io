import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function GetInTouch(){
  return (
    <>
      <p className="text-xl font-bold mt-6">Yes!</p>
      <p className="text-base text-slate-400 font-sans max-w-3xl max-w-prose mt-6">
        I am looking for new opportunities at this time.
      </p>
      <p className="text-base text-slate-400 font-sans max-w-3xl max-w-prose mt-2">
        I'd love to chat with you about your needs and goals, so feel free to reach out to me over email or LinkedIn. :)
      </p>
      <div className="w-20 flex justify-between mt-4">
          <a className="contact-link" href="https://www.linkedin.com/in/sharoncraddock/"><LinkedInIcon /></a>
          <a className="contact-link" href="mailto:sharoncraddock.tech@gmail.com?subject=Hello!&body=I%20visited%20your%20profile%20site%20and%20wanted%20to%20reach%20out!%20%3A)"><EmailIcon /></a>
      </div>
    </>
  );
}

export default GetInTouch;