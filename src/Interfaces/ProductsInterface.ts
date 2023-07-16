export interface ContextValues {
  products: Appliance[];
  product: Appliance;
  getAllProducts: () => void;
  getProductById: (id: string) => void;
  getProductByMarking: (marking: string) => void;
  getProductByName: (name: string) => void;
  deleteProductById: (id: number) => void;
  createProduct: (
    name: string,
    description: string,
    marking: string,
    voltage: string,
    quantity: string,
    image: string
  ) => void;
  editProduct: (
    id: number,
    name: string,
    description: string,
    marking: string,
    voltage: string,
    quantity: string,
    image: string
  ) => void;
}

export interface ApplianceResponseGetAll {
  data: Appliance[];
}

export interface ApplianceResponseGetSingle {
  data: Appliance;
}

export interface ErrorResponse {
  response: { data: { message: string } };
}

export interface Appliance {
  id: number;
  name: string;
  image: string | null;
  quantity: number;
  description: string;
  marking: string;
  voltage: string;
  created_at: string;
  updated_at: string;
}
