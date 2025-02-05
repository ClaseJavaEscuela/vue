import {axiosStore} from './axios';
export const getPhones =async ()=>{
  try{
    const res = await axiosStore.get('products/category?type=mobile');
    return res.data.products;
  }catch(e){
    console.log(e)
  }
}

export const getInfoPhone=async(id)=>{
  try{
    const res = await axiosStore.get(`products/${id}`);
    return res.data.product;
  }catch(e){
    console.log(e)
  }
}

