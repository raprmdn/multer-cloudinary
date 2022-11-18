## Express Multer Cloudinary

This is a simple example of how to use [multer](https://www.npmjs.com/package/multer) and [cloudinary](https://www.npmjs.com/package/cloudinary) to upload images to the cloud.

### Dependencies

- [multer](https://www.npmjs.com/package/multer)
- [cloudinary](https://www.npmjs.com/package/cloudinary)

### Features

- [x] Upload images to the cloud
- [x] Get images from the cloud
- [x] Delete images from the cloud

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Cloudinary](https://cloudinary.com/) Account
- [Multer](https://www.npmjs.com/package/multer)

### Installation

Clone this repository

```bash
git clone https://github.com/raprmdn/multer-cloudinary.git
```

Install the dependencies

```bash
npm install
```

Configure the environment variables.

Copy the `.env.example` file to `.env` and fill in the required values.

```bash
cp .env.example .env
```

Configure the cloudinary account.

Get `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET` from your cloudinary account [here](https://https://cloudinary.com/).

```dotenv
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Usage

Run the server

> **Note:** Make sure you have installed global dependencies [nodemon](https://www.npmjs.com/package/nodemon), [sequelize](https://www.npmjs.com/package/sequelize-cli).

```bash
# Create database
sequelize db:create

# Run migrations
sequelize db:migrate

# Run the application
# By default, the application will run on port 5000
npm run dev
```

### API Documentation

#### GET `api/gallery` - Get all images from the cloud

#### POST `api/gallery` - Upload image to the cloud
##### Request Body: `Content-Type: multipart/form-data`
- title `string` `*required`
- slug `string` `*required`
- photo `file` `PNG, JPEG, JPG, GIF, SVG, and WEBP` `*required`

#### GET `api/gallery/:slug` - Get image from the cloud

#### DELETE `api/gallery/:slug` - Delete image from the cloud
