@Path("/json/product")
public class JSONService {

    @GET
    @Path("/get")
    @Produces("application/json")
    public Product getProductInJSON() {

        Product product = new Product();

        product.setQty(999);
        
        return product; 

    }
    //...
@Path("/json/product")
public class JSONService {

        @POST
    @Path("/post")
    @Consumes("application/json")
    public Response createProductInJSON(Product product) {

        String result = "Product created : " + product;
        return Response.status(201).entity(result).build();
        
    }