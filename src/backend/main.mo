import Map "mo:core/Map";
import Text "mo:core/Text";
import List "mo:core/List";
import Float "mo:core/Float";
import Array "mo:core/Array";
import Principal "mo:core/Principal";

actor {
  // Types
  type Product = {
    id : Nat;
    name : Text;
    category : Text;
    price : Float;
    description : Text;
  };
  type CartItem = {
    productId : Nat;
    quantity : Nat;
  };

  // Persistent Data Structures
  let productMap = Map.empty<Nat, Product>();
  let cartMap = Map.empty<Principal, List.List<CartItem>>();

  // Seed Sample Data
  let sampleProducts = [
    {
      id = 1;
      name = "Diamond Ring";
      category = "Rings";
      price = 999.99;
      description = "Elegant diamond ring perfect for engagements.";
    },
    {
      id = 2;
      name = "Pearl Necklace";
      category = "Necklaces";
      price = 499.99;
      description = "Beautiful pearl necklace for any occasion.";
    },
    {
      id = 3;
      name = "Gold Bracelet";
      category = "Bracelets";
      price = 299.99;
      description = "Classic gold bracelet with timeless appeal.";
    },
    {
      id = 4;
      name = "Silver Earrings";
      category = "Earrings";
      price = 149.99;
      description = "Stylish silver earrings for daily wear.";
    },
    {
      id = 5;
      name = "Emerald Pendant";
      category = "Necklaces";
      price = 899.99;
      description = "Enchanting emerald pendant to add elegance.";
    },
  ];

  // Initialize Persistent Data
  public shared ({ caller }) func init() : async () {
    for (product in sampleProducts.values()) {
      productMap.add(product.id, product);
    };
  };

  // Product Catalog Functions
  public query ({ caller }) func getAllProducts() : async [Product] {
    productMap.values().toArray();
  };

  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    productMap.values().toArray().filter(
      func(product) {
        Text.equal(product.category, category);
      }
    );
  };

  public query ({ caller }) func getFeaturedProducts() : async [Product] {
    // Arbitrarily pick first 3 as featured
    productMap.values().toArray().sliceToArray(0, 3);
  };

  // Shopping Cart Functions
  public shared ({ caller }) func addToCart(productId : Nat, quantity : Nat) : async () {
    let cart = switch (cartMap.get(caller)) {
      case (null) { List.empty<CartItem>() };
      case (?existing) { existing };
    };

    cart.add({ productId; quantity });
    cartMap.add(caller, cart);
  };

  public shared ({ caller }) func removeFromCart(productId : Nat) : async () {
    switch (cartMap.get(caller)) {
      case (null) { () };
      case (?cart) {
        let filtered = cart.toArray().filter(
          func(item) { item.productId != productId }
        );
        cartMap.add(caller, List.fromArray<CartItem>(filtered));
      };
    };
  };

  public query ({ caller }) func getCart() : async [CartItem] {
    switch (cartMap.get(caller)) {
      case (null) { [] };
      case (?cart) { cart.toArray() };
    };
  };
};
