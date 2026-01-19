GitHub Pages is a free hosting service from GitHub that serves static files directly from a repository. Here's how to get started:
1. Create a GitHub account if you don't have one already at github.com.
2. Create a new repository. Click the "+" icon in the top right and select "New repository." You can name it anything, but if you name it yourusername.github.io, it becomes your main GitHub Pages site.
3. Add your website files. Upload or push your HTML, CSS, and JavaScript files to the repository. At minimum, you need an index.html file—this is your homepage.
4. Enable GitHub Pages. Go to your repository's Settings → Pages (in the left sidebar). Under "Source," select the branch you want to deploy from (usually main) and click Save.
5. Access your site. After a minute or two, your site will be live at https://yourusername.github.io/repositoryname. If you used the special yourusername.github.io naming convention, it's just https://yourusername.github.io.
Connecting your custom domain:
Once your site is working, go back to Settings → Pages and enter your domain in the "Custom domain" field. Then, at your domain registrar, add either a CNAME record pointing to yourusername.github.io (for a subdomain like www) or A records pointing to GitHub's IP addresses (for a root domain like example.com). GitHub's docs list the current IPs.
GitHub will even provision a free SSL certificate for you automatically.
