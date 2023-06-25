import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from './Blog.module.css';
import classNames from 'classnames';
import Aos from "aos";
import 'aos/dist/aos.css'

//Component
const Blog = () => {
  const blogData = [
    {
        species: "Dog",
        name: "Fluffy",
        title:    "The Benefits of Regular Exercise for All Dogs",
        overview: "Regular exercise is essential for keeping your dog healthy and happy. In this blog post, we'll explore the many benefits of exercise for dogs, including improved physical health, better behavior",
        breed: "Labrador Retriever",
        age: 3,
        weight: 25,
        owner_name: "John Smith",
        owner_email: "john.smith@example.com",
        owner_phone: "555-1234",
        date: "2023-05-28",
        image: "Images/blog-5.jpg"
      },
      {
        name: "Whiskers",
        title: 'How to Train Your Cat to Use the Litter Box',
        overview: "Training your cat to use the litter box is an important part of being a responsible pet owner.In this blog post, will provide step-by-step instructions for litter box training",
        species: "Cat",
        breed: "Siamese",
        age: 2,
        weight: 8,
        owner_name: "Jane Doe",
        owner_email: "jane.doe@example.com",
        owner_phone: "555-5678",
        date: "2023-05-28",
        image: "Images/blog-4.jpg"
  
      },
      {
        name: "Bubbles",
        title: "The Best Pet Breeds for Apartment Living",
        overview: "Choosing the right pet breed for apartment living is important for both you and your furry friend. In this blog post, we'll explore the best pet breeds for apartment living, including dogs, cats",
        species: "Fish",
        breed: "Goldfish",
        age: 1,
        weight: 0.1,
        owner_name: "Bob Johnson",
        owner_email: "bob.johnson@example.com",
        owner_phone: "555-9012",
        date: "2023-05-12",
        image: "Images/blog-3.jpg"
      }  ];

  return (
    <>
      <section id='blog' className={  classNames( styles.block, styles.blogBlock , )}>
        <Container >
          <div className={classNames(styles.title, 'mt-4' , 'coontainer')}>
            <h2 className={classNames('subtitleHead')}>LATEST <span className={styles.span}>FROM BLOG</span> </h2>
            
          </div>
          <Row className={styles.myRow}>
            {blogData.map((blog, index) => (
              <Col key={index} xs={12} md={6} lg={4} className={classNames('my-col', styles.cardCol)}>
                <div className={classNames('holder', styles.cardHolder)}>

                  <Card className={classNames('my-card', styles.card)}  data-aos="fade-up-right" >
                    <div className={classNames('card-img-wrapper', styles.cardImgWrapper)}>
                      <Card.Img src={blog.image} alt="Card image" />
                    </div>
                    <Card.Body  >
                    
                      <time className={classNames('text-start d-block', styles.cardDate)}>{blog.date}</time>
                      <Card.Title className={classNames(' text-start', styles.cardTitle)}>{blog.title}</Card.Title>
                      <Card.Text className={classNames('text-start', styles.cardText)}>
                        {blog.overview}
                      </Card.Text>
                      <a href="#a" className={classNames('d-block w-50' ,  'btn', styles.readMoreBtn)}>
                        Read More
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        
      </section>
    </>
  );
};

export default Blog;
