import React, { useContext, useEffect, useState } from 'react';
import { Spinner, Table, Form, Button, Col, Row } from 'react-bootstrap';
import { ApiContext } from "../../context/API-Context";

const ProductsTable = () => {
const { productData, createProduct, updateProductData, deleteProduct } = useContext(ApiContext);
const [newProduct, setNewProduct] = useState({
name: '',
description: '',
price: '',
approval: '',
category: '',
file: null,
user_id: null,
});

const [editProduct, setEditProduct] = useState({
id: '',
name: '',
description: '',
price: '',
approval: '',
category: '',
file: null,
user_id: null,
});

const [showAddForm, setShowAddForm] = useState(false);
const [showEditForm, setShowEditForm] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [errors, setErrors] = useState({});

const handleInputChange = (event) => {
const { name, value } = event.target;
setNewProduct({ ...newProduct, [name]: value });
setEditProduct({ ...editProduct, [name]: value });
};

const handleFileChange = (event) => {
setNewProduct({ ...newProduct, file: event.target.files[0] });
setEditProduct({ ...editProduct, file: event.target.files[0] });
};

const handleAddProduct = async (event) => {
event.preventDefault();
const errors = validateForm(newProduct);
if (Object.keys(errors).length === 0) {
setIsLoading(true);
const formData = new FormData();
formData.append('name', newProduct.name);
formData.append('description', newProduct.description);
formData.append('price', newProduct.price);
formData.append('approval', newProduct.approval);
formData.append('category', newProduct.category);
formData.append('file', newProduct.file);
formData.append('user_id', newProduct.user_id);
await createProduct(formData);
setNewProduct({
name: '',
description: '',
price: '',
approval: '',
category: '',
file: null,
user_id: null,
});
setShowAddForm(false);
setIsLoading(false);
} else {
setErrors(errors);
}
};

const handleEditProduct = async (event) => {
event.preventDefault();
const errors = validateForm(editProduct);
if (Object.keys(errors).length === 0) {
setIsLoading(true);
const formData = new FormData();
formData.append('name', editProduct.name);
formData.append('description', editProduct.description);
formData.append('price', editProduct.price);
formData.append('approval', editProduct.approval);
formData.append('category', editProduct.category);
formData.append('file', editProduct.file);
formData.append('user_id', editProduct.user_id);
await updateProductData(editProduct.id, formData);
setEditProduct({
id: '',
name: '',
description: '',
price: '',
approval: '',
category: '',
file: null,
user_id: null,
});
setShowEditForm(false);
setIsLoading(false);
} else {
setErrors(errors);
}
};

const handleDeleteProduct = (id) => {
deleteProduct(id);
};

const validateForm = (formData) => {
const errors = {};
if (!formData.name) {
errors.name = 'Name is required';
}
if (!formData.price) {
errors.price = 'Price is required';
} else if (!/^\d+$/.test(formData.price)) {
errors.price = 'Price must be a valid integer';
}
if (!formData.approval) {
errors.approval = 'Approval is required';
} else if (!['pending', 'approved', 'rejected'].includes(formData.approval)) {
errors.approval = 'Approval must be either pending, approved, or rejected';
}
if (!formData.category) {
errors.category = 'Category is required';
} else if (!['food', 'toys', 'accessories', 'beds', 'grooming'].includes(formData.category)) {
errors.category = 'Category must be one of food, toys, accessories, beds, or grooming';
}
if (!formData.file) {
errors.file = 'File is required';
} else {
const allowedTypes = ['image/jpeg', 'image/png', 'image/bmp', 'image/tiff', 'image/webp', 'image/heif'];
if (!allowedTypes.includes(formData.file.type)) {
errors.file = 'File type not allowed. Allowed types are: jpg, jpeg, bmp, png, tiff, webp, and heif';
}
if (formData.file.size > 10000000) {
errors.file = 'File size exceeds 10MB';
}
}
return errors;
};

useEffect(() => {
setIsLoading(true);
}, [productData]);

useEffect(() => {
if (productData) {
setIsLoading(false);
}
}, [productData]);

return (
<div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<Button onClick={() => setShowAddForm(true)}>Add</Button>
{showAddForm && (
<Form onSubmit={handleAddProduct}>
<Form.Group>
<Form.Label>Name</Form.Label>
<Form.Control type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
{errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
</Form.Group>
<Form.Group>
<Form.Label>Description</Form.Label>
<Form.Control type="text" name="description" value={newProduct.description} onChange={handleInputChange} />
</Form.Group>
<Form.Group>
<Form.Label>Price</Form.Label>
<Form.Control type="number" name="price" value={newProduct.price} onChange={handleInputChange} />
{errors.price && <Form.Text className="text-danger">{errors.price}</Form.Text>}
</Form.Group>
<Form.Group>
<Form.Label>Approval</Form.Label>
<Form.Control as="select" name="approval" value={newProduct.approval} onChange={handleInputChange}>
<option value="">-- Select Approval --</option>
<option value="pending">Pending</option>
<option value="approved">Approved</option>
<option value="rejected">Rejected</option>
</Form.Control>
{errors.approval && <Form.Text className="text-danger">{errors.approval}</Form.Text>}
</Form.Group>
<Form.Group>
<Form.Label>Category</Form.Label>
<Form.Control as="select" name="category" value={newProduct.category} onChange={handleInputChange}>
<option value="">-- Select Category --</option>
<option value="food">Food</option>
<option value="toys">Toys</option>
<option value="accessories">Accessories</option>
<option value="beds">Beds</option>
<option value="grooming">Grooming</option>
</Form.Control>
{errors.category && <Form.Text className="text-danger">{errors.category}</Form.Text>}
</Form.Group>
<Form.Group>
<Form.Label>Image</Form.Label>
<Form.File name="file" onChange={handleFileChange} />
{errors.file && <Form.Text className="text-danger">{errors.file}</Form.Text>}
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
</Form>
)}
{isLoading ? (
<Spinner animation="border" />
) : (
<Table striped bordered hover>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Description</th>
<th>Price</th>
<th>Approval</th>
<th>Category</th>
<th>Image</th>
<th>Add</th>
<th>Delete</th>
<th>Update</th>
</tr>
</thead>
<tbody>
{productData &&
productData.map((product) => (
<tr key={product.id}>
<td>{product.id}</td>
<td>{product.name}</td>
<td>{product.description}</td>
<td>{product.price}</td>
<td>{product.approval}</td>
<td>{product.category}</td>
<td>
<img src={product.image} alt="product" />
</td>
<td>
<Button variant="danger" onClick={() => handleDeleteProduct(product.id)}>
Delete
</Button>
</td>
<td>
<Button
variant="warning"
onClick={() => {
setEditProduct(product);
setShowEditForm(true);
}}
>
Update
</Button>
</td>
</tr>
))}
</tbody>
</Table>
)}
{showEditForm && (
<Form onSubmit={handleEditProduct}>
<Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={editProduct.name} onChange={handleInputChange} />
            {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" value={editProduct.description} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" name="price" value={editProduct.price} onChange={handleInputChange} />
            {errors.price && <Form.Text className="text-danger">{errors.price}</Form.Text>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Approval</Form.Label>
            <Form.Control as="select" name="approval" value={editProduct.approval} onChange={handleInputChange}>
              <option value="">-- Select Approval --</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </Form.Control>
            {errors.approval && <Form.Text className="text-danger">{errors.approval}</Form.Text>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" name="category" value={editProduct.category} onChange={handleInputChange}>
              <option value="">-- Select Category --</option>
              <option value="food">Food</option>
              <option value="toys">Toys</option>
              <option value="accessories">Accessories</option>
              <option value="beds">Beds</option>
              <option value="grooming">Grooming</option>
            </Form.Control>
            {errors.category && <Form.Text className="text-danger">{errors.category}</Form.Text>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.File name="file" onChange={handleFileChange} />
            {errors.file && <Form.Text className="text-danger">{errors.file}</Form.Text>}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};


export default ProductsTable;
