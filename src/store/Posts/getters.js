const setBanner = banner => {
  if (banner['wp:featuredmedia']) {
    return {
      backgroundColor: 'rgba(0, 0, 0, .5) !important',
      backgroundImage: `url(${'image'})`,
      backgroundBlendMode: 'color-dodge',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '300px'
    }
  } else {
    return ''
  }
}

const getBanner = state => ({
  title: state.banner?.title?.rendered,
  style: setBanner(state.banner?._embedded)
})

export default {
  getBanner
}
