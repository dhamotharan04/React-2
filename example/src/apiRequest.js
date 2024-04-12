const apiRequest = async (url = '', optionObj = null,
  errMsg = null) => {
  try {
    const response = await fetch(url,optionObj)
    if(!response.ok) throw Error('please reload the app ')
  } catch (err) {
    errMsg=err.Message
  } finally {
  }
}

export default apiRequest