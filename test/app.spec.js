const app = require('../modules/app/app');
const store = require('../store');
const { expect } = require('chai');


describe('people endpoints', () => {
  describe('/people', () => {
    it('responds 200 and an array of peoples names', () => {
      return supertest(app)
        .get('/people')
        .expect(200)
        .expect((res) => {
          console.log(res.body);
          expect(res.body).to.eql({
            people: ['Randy Lahey', 'Trevor Cory', 'Jim Lahey']
          });
        });
    });
    it('responds 201 with new name', () => {
      return supertest(app)
        .post('/people')
        .send({ name: 'Ricky' })
        .expect(201);
    });
  });
});

describe('pets endpoints', () => {
  describe('/pets/next', () => {
    it('responds 200 with a cat and dog object', () => {
      return supertest(app)
        .get('/pets')
        .expect(200)
        .expect((res) => {
          console.log(res.body);
          expect(res.body).to.eql({
            dog:
              {
                age: 3,
                breed: 'Golden Retriever',
                description: 'A smiling golden-brown golden retreiver listening to music.',
                gender: 'Male',
                imageURL: 'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name: 'Zim',
                story: 'Owner passed away',
              },
            cat: {
              age: 2,
              breed: 'Bengal',
              description: 'Orange bengal cat with black stripes lounging on concrete',
              gender: 'Female',
              imageURL: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              name: 'Steve French',
              story: 'Thrown on the street',
            },
          });
        });
    });
  });
});