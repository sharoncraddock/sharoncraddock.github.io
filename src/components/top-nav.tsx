import ArticleIcon from '@mui/icons-material/Article';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function TopNav(){
  return (
    <div className="fixed p-4 border-b bg-blue-custom border-slate-400 top-0 left-0 right-0 z-10">
      <div className="flex justify-center md:justify-end">
        <div className="w-48 flex justify-evenly items-center">
            <a className="contact-link contact-link--gh" href="https://github.com/sharoncraddock"><GitHubIcon /></a>
            <a className="contact-link" href="https://www.linkedin.com/in/sharoncraddock/"><LinkedInIcon /></a>
            <a className="contact-link" href="mailto:sharoncraddock.tech@gmail.com?subject=Hello!&body=I%20visited%20your%20profile%20site%20and%20wanted%20to%20reach%20out!%20%3A)"><EmailIcon /></a>
            {/*<a className="">Resume</a>*/}
        </div>
      </div>
    </div>
  );
}


export default TopNav;