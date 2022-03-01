import bcrypt from 'bcryptjs';

const data = {
  CVE: [
    {
      Name: 'Test',
      Status: 'Test',
      Description: 'Test',
      References: 'Test',
      Phase: 'Test',
      Votes: 'Test',
      Comments: 'Test',
    },
  ],
  users: [
    {
      name: 'Becca',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Attack 1',
      slug: 'Attack 1',
      category: 'Cyber',
      image: '/images/p1.jpg', // 679px × 829px
      rating: 4.5,
      numReviews: 10,
      description: 'Trojan horse attacks',
    },
    {
      // _id: '2',
      name: 'Attack 2',
      slug: 'Attack 2',
      category: 'Cyber',
      image: '/images/p2.jpg',
      rating: 4.0,
      numReviews: 10,
      description: 'Denial of service attack',
    },
    {
      // _id: '3',
      name: 'Attack 3',
      slug: 'Attack 3',
      category: 'Cyber',
      image: '/images/p3.jpg',
      rating: 4.5,
      numReviews: 14,
      description: 'Hackers',
    },
    {
      // _id: '4',
      name: 'Attack 4',
      slug: 'Attack 4',
      category: 'Cyber',
      image: '/images/p4.jpg',
      rating: 4.5,
      numReviews: 10,
      description: 'Virus',
    },
  ],
};
export default data;
