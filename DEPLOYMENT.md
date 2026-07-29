# GitHub Pages Deployment Guide

## 🚀 Quick Start

### 1. Create a GitHub Repository

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial cyberpunk portfolio"

# Create repository on GitHub and push
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under **Build and deployment**, select:
   - **Source**: `GitHub Actions`
4. Click **Save**

### 3. Watch the Magic Happen

- The workflow will automatically run on your first push to `main` branch
- Your site will be deployed to: `https://yourusername.github.io/your-repo/`
- Future pushes to `main` will automatically update your site

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages workflow
├── index.html              # Main website
├── styles.css              # Cyberpunk styling
├── script.js               # Interactivity
├── src/
│   ├── skillicons/         # Skill icons
│   └── sampleworks/        # Portfolio samples
├── DEPLOYMENT.md           # This guide
└── README.md               # Project documentation
```

## 🔧 Customization

### Update GitHub Pages Settings

Edit `.github/workflows/deploy.yml` to:
- Change branch triggers
- Modify build process
- Add custom deployment steps

### Change Deployment Branch

```yaml
on:
  push:
    branches: ["main"]  # Change this to your preferred branch
```

## 🎯 Deployment Options

### Option 1: Automatic Deployment (Recommended)
- Push to `main` branch → Automatic deployment
- Uses GitHub Actions workflow
- Fast and reliable

### Option 2: Manual Deployment
1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**
4. Choose branch and click **Run workflow**

## 🔄 Update Process

```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push origin main
```

Your changes will be live within 1-2 minutes!

## 🛠 Troubleshooting

### Workflow Not Running
- Check that you pushed to the `main` branch
- Verify GitHub Pages is set to use GitHub Actions
- Check Actions tab for error messages

### 404 Error After Deployment
- Wait 1-2 minutes for DNS propagation
- Check that repository is public (private repos need special setup)
- Verify the correct branch is selected in Pages settings

### Changes Not Showing
- Clear your browser cache
- Try incognito mode
- Check if workflow completed successfully in Actions tab

## 📊 Monitoring

- **Deployment Status**: Actions tab → Deploy to GitHub Pages
- **Live Site**: `https://yourusername.github.io/your-repo/`
- **Settings**: Settings → Pages

## 🎨 Advanced Customization

### Custom Domain

1. Buy a domain (e.g., yourname.com)
2. Go to Settings → Pages
3. Add custom domain in the Custom domain section
4. Configure DNS records with your domain provider

### Environment Variables

Add secrets in Settings → Secrets → Actions for sensitive data

### Custom Build Process

Modify the workflow to include build steps:
```yaml
- name: Build
  run: npm install && npm run build
```

## 🔒 Security

- Keep your `main` branch protected
- Use environment secrets for sensitive data
- Review workflow files before merging

## 🚀 You're Live!

Your cyberpunk portfolio is now accessible at:
**https://yourusername.github.io/your-repo/**

Share it with the world! 🌍