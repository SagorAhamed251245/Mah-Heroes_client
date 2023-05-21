import PageTitles from "../../Shared/PageTitles/PageTitles";


const Blogs = () => {
    return (
        <>


            <div >
               <PageTitles titles='Mah Heroes | Blogs'></PageTitles>
                <div className='text-center text-3xl font-bold text-primary mb-10'>
                    <p>Question And Answer</p>
                </div>

                <div className='   my-3 md:w-3/4 px-5 md:px-0 mx-auto '>
                    <p className='font-bold text-2xl mb-5 '>
                        1.What is an access token and refresh token? How do they work and where should we store them on the client-side?

                    </p>
                    <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                        <span className='text-primary mr-2'>Ans:</span>In authentication systems, access tokens and refresh tokens are used to grant secure access to protected resources.

                        After successful authentication, a client application is given a temporary credential known as an access token. It includes details about user and client permissions. When submitting requests to access protected resources, the access token is used to verify the client's identity.

                        Along with the access token, a refresh token is a persistent credential that is given out. The refresh token can be used to get a new access token when the old one expires without requiring the user to re-authenticate.

                        we should store them on the cookie storage on client-side.
                    </p>
                    {/* 1 */}

                    <p className='font-bold text-2xl mb-5 '>
                        2. Compare SQL and NoSQL databases?

                    </p>
                    <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                        <span className='text-primary mr-2'>Ans:</span>
                        SQL databases are frequently used for structured data and complicated querying because they are built on a relational data architecture with specified schemas, employ SQL as a query language, enforce tight schemas, and offer robust transactional support.
                        On the other hand
                        NoSQL databases are suitable for handling unstructured or fast changing data because they support a variety of data models, have flexible schemas, employ a variety of query interfaces or languages, allow scalability through horizontal scaling, and may forego some transactional guarantees for performance.
                    </p>
                    {/* 2 */}
                    {/* 3 */}
                    <p className='font-bold text-2xl mb-5 '>
                        3. What is express js? What is Nest JS?
                    </p>
                    <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                        <span className='text-primary mr-2'>Ans:</span>
                        Express.js. is a popular and minimalistic web application framework for Node.js It offers a simple and direct method for creating JavaScript web servers and APIs. Express.js's straightforward design makes it simple for programmers to quickly create routes, manage requests, and take care of middleware when creating effective and scalable web applications.
                        <br /> 
                        <br />
                        On the other hand
                        NestJS is a powerful and scalable TypeScript-based web framework for Node.js. Inspired by Angular, it offers a modular architecture, dependency injection, and strong typing for building server-side applications. With support for multiple transport layers, NestJS enables the development of robust and maintainable web and real-time applications.


                    </p>
                    {/* 4 */}
                    <p className='font-bold text-2xl mb-5 '>
                        4. What is MongoDB aggregate and how does it work?
                    </p>
                    <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                        <span className='text-primary mr-2'>Ans:</span>The MongoDB aggregate method is used to perform advanced data aggregation operations on documents in a collection. It works by applying a sequence of pipeline stages to filter, transform, group, and analyze the data, providing powerful insights and analysis capabilities.
                    </p>

                </div>
            </div>
        </>
    );
};

export default Blogs;