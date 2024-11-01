const isProd=process.env.NODE_ENV='production'

module.exports = {
  basePath:isProd?"~/my-info":"",
  reactStrictMode: true,
  output:"export",
  distDir:"dist",
  images:{
    unoptimized:true
  }
}