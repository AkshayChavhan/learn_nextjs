const { username , password } = process.env ;
export const mongodbstr = `mongodb+srv://${username}:${password}@cluster0.dugrdml.mongodb.net/productDB?retryWrites=true&w=majority`;