"use client"
import React, { useEffect, useState } from 'react';
import styles from '../table.module.css';
import { useRouter } from 'next/router';

async function fetchProductList() {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}

function ProductList() {
//   const router = useRouter();
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductList()
      .then((data) => {
        console.log(data);
        setProductList(data.result);
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to fetch data. Please try again.');
      });
  }, []);

  return (
    <>
      <h1>Product List</h1>
      {/* <button onClick={() => router.push('/addproduct')}>Add Product</button> */}
      {error ? (
        <p>{error}</p>
      ) : (
        <table className={styles.maintable}>
          <thead>
            <tr>
              <th className={styles.tableth}>Name</th>
              <th className={styles.tableth}>Brand</th>
              <th className={styles.tableth}>Price</th>
              <th className={styles.tableth}>Color</th>
            </tr>
          </thead>
          <tbody>
            {productList.length > 0 ? (
              productList.map((item, index) => (
                <tr key={`${item.name}_${index}`}>
                  <td className={styles.tabletd}>{item.name}</td>
                  <td className={styles.tabletd}>{item.brand}</td>
                  <td className={styles.tabletd}>{item.price}</td>
                  <td className={styles.tabletd}>{item.color}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No products available.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ProductList;
