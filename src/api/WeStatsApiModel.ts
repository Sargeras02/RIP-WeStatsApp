/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface WeStatsUserLogin {
  /**
   * Email адрес
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /**
   * Пароль
   * @minLength 1
   * @maxLength 50
   */
  password: string;
}

export interface Measurement {
  /** Measurement id */
  measurement_id?: number;
  /** Weather station */
  weather_station?: number;
  /** Creator */
  creator?: number;
  /**
   * Created date
   * @format date-time
   */
  created_date?: string;
  /**
   * Temperature
   * @format decimal
   */
  temperature: string;
  /**
   * Humidity
   * @format decimal
   */
  humidity: string;
  /**
   * Wind speed
   * @format decimal
   */
  wind_speed: string;
}

export interface UploadMeasurement {
  /** Weather station */
  weather_station?: number;
  /**
   * Temperature
   * @format decimal
   */
  temperature: string;
  /**
   * Humidity
   * @format decimal
   */
  humidity: string;
  /**
   * Wind speed
   * @format decimal
   */
  wind_speed: string;
}

export interface OrderInfo {
  /** Order id */
  order_id?: number;
  /** Status */
  status?: "draft" | "deleted" | "formed" | "completed" | "rejected";
  /** Creator */
  creator?: number;
  /** Moderator */
  moderator?: number | null;
  /**
   * Created date
   * @format date-time
   */
  created_date?: string;
  /**
   * Formation date
   * @format date-time
   */
  formation_date?: string | null;
  /**
   * Completion date
   * @format date-time
   */
  completion_date?: string | null;
}

export interface PublicOrderInfo {
  /** Order id */
  order_id?: number;
  /** Status */
  status?: "draft" | "deleted" | "formed" | "completed" | "rejected";
  /** Creator */
  creator?: number;
  /**
   * Formation date
   * @format date-time
   */
  formation_date?: string | null;
  /**
   * Completion date
   * @format date-time
   */
  completion_date?: string | null;
}

export interface MeasurementData {
  /** Weather station */
  weather_station?: number;
  /**
   * Created date
   * @format date-time
   */
  created_date?: string;
  /**
   * Temperature
   * @format decimal
   */
  temperature: string;
  /**
   * Humidity
   * @format decimal
   */
  humidity: string;
  /**
   * Wind speed
   * @format decimal
   */
  wind_speed: string;
}

export interface TotalOrderInfo {
  order: PublicOrderInfo;
  measurements: MeasurementData[];
}

export interface OrderAddItem {
  /** Measurement id */
  measurement_id?: string;
}

export interface OrderItemMeasurement {
  /** Order */
  order: number;
  /** Measurement */
  measurement: number;
}

export interface Profile {
  /**
   * Имя
   * @minLength 1
   * @maxLength 50
   */
  name?: string;
  /** Role */
  role?: string;
  /**
   * Email адрес
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
}

export interface WeatherStation {
  /** Station id */
  station_id?: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /**
   * Description
   * @minLength 1
   */
  description: string;
  /**
   * Location
   * @minLength 1
   * @maxLength 255
   */
  location: string;
  /**
   * Open date
   * @format date-time
   */
  open_date: string;
  /** Status */
  status: boolean;
  /**
   * Image url
   * @minLength 1
   * @maxLength 255
   */
  image_url?: string;
}

export interface WeStatsUserUpdateRole {
  /** Роль пользователя */
  user_role?: "just_user" | "meteorologist" | "r_manager" | "r_admin";
}

export interface WeStatsUser {
  /** User id */
  user_id?: number;
  /**
   * Имя
   * @minLength 1
   * @maxLength 50
   */
  name?: string;
  /**
   * Email адрес
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /**
   * Пароль
   * @minLength 1
   * @maxLength 50
   */
  password: string;
  /** Роль пользователя */
  user_role?: "just_user" | "meteorologist" | "r_manager" | "r_admin";
  /** Админ? */
  is_staff?: boolean;
  /**
   * Superuser status
   * Designates that this user has all permissions without explicitly assigning them.
   */
  is_superuser?: boolean;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://127.0.0.1:8000" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title WeStats API
 * @version v1
 * @license BSD License
 * @termsOfService https://www.google.com/policies/terms/
 * @baseUrl http://127.0.0.1:8000
 * @contact <contact@snippets.local>
 *
 * WeStats - Weather Service API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  login = {
    /**
     * No description
     *
     * @tags login
     * @name LoginCreate
     * @request POST:/login
     * @secure
     */
    loginCreate: (data: WeStatsUserLogin, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  logout = {
    /**
     * No description
     *
     * @tags logout
     * @name LogoutCreate
     * @request POST:/logout
     * @secure
     */
    logoutCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/logout`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  measurements = {
    /**
     * No description
     *
     * @tags measurements
     * @name MeasurementsList
     * @request GET:/measurements
     * @secure
     */
    measurementsList: (params: RequestParams = {}) =>
      this.request<Measurement[], any>({
        path: `/measurements`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags measurements
     * @name MeasurementsCreate
     * @request POST:/measurements
     * @secure
     */
    measurementsCreate: (data: UploadMeasurement, params: RequestParams = {}) =>
      this.request<Measurement, any>({
        path: `/measurements`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags measurements
     * @name MeasurementsRead
     * @request GET:/measurements/{id}
     * @secure
     */
    measurementsRead: (id: string, params: RequestParams = {}) =>
      this.request<Measurement, any>({
        path: `/measurements/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags measurements
     * @name MeasurementsUpdate
     * @request PUT:/measurements/{id}
     * @secure
     */
    measurementsUpdate: (id: string, data: UploadMeasurement, params: RequestParams = {}) =>
      this.request<Measurement, any>({
        path: `/measurements/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags measurements
     * @name MeasurementsDelete
     * @request DELETE:/measurements/{id}
     * @secure
     */
    measurementsDelete: (id: string, params: RequestParams = {}) =>
      this.request<Measurement, any>({
        path: `/measurements/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  orders = {
    /**
     * No description
     *
     * @tags orders
     * @name OrdersList
     * @request GET:/orders
     * @secure
     */
    ordersList: (params: RequestParams = {}) =>
      this.request<OrderInfo[], any>({
        path: `/orders`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersCreate
     * @request POST:/orders
     * @secure
     */
    ordersCreate: (params: RequestParams = {}) =>
      this.request<OrderInfo, void>({
        path: `/orders`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersRead
     * @request GET:/orders/{id}
     * @secure
     */
    ordersRead: (id: string, params: RequestParams = {}) =>
      this.request<TotalOrderInfo, any>({
        path: `/orders/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersAcceptPartialUpdate
     * @request PATCH:/orders/{id}/accept
     * @secure
     */
    ordersAcceptPartialUpdate: (id: string, params: RequestParams = {}) =>
      this.request<OrderInfo, any>({
        path: `/orders/${id}/accept`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersAddItemCreate
     * @request POST:/orders/{id}/addItem
     * @secure
     */
    ordersAddItemCreate: (id: string, data: OrderAddItem, params: RequestParams = {}) =>
      this.request<OrderItemMeasurement, any>({
        path: `/orders/${id}/addItem`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersDeletePartialUpdate
     * @request PATCH:/orders/{id}/delete
     * @secure
     */
    ordersDeletePartialUpdate: (id: string, params: RequestParams = {}) =>
      this.request<OrderInfo, any>({
        path: `/orders/${id}/delete`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersFormatPartialUpdate
     * @request PATCH:/orders/{id}/format
     * @secure
     */
    ordersFormatPartialUpdate: (id: string, params: RequestParams = {}) =>
      this.request<OrderInfo, any>({
        path: `/orders/${id}/format`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersRejectPartialUpdate
     * @request PATCH:/orders/{id}/reject
     * @secure
     */
    ordersRejectPartialUpdate: (id: string, params: RequestParams = {}) =>
      this.request<OrderInfo, any>({
        path: `/orders/${id}/reject`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  profile = {
    /**
     * No description
     *
     * @tags profile
     * @name ProfileList
     * @request GET:/profile
     * @secure
     */
    profileList: (params: RequestParams = {}) =>
      this.request<Profile, any>({
        path: `/profile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  stations = {
    /**
     * No description
     *
     * @tags stations
     * @name StationsList
     * @request GET:/stations
     * @secure
     */
    stationsList: (
      query?: {
        /** Filter criteria */
        filter?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<WeatherStation[], any>({
        path: `/stations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags stations
     * @name StationsCreate
     * @request POST:/stations
     * @secure
     */
    stationsCreate: (data: WeatherStation, params: RequestParams = {}) =>
      this.request<WeatherStation, any>({
        path: `/stations`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags stations
     * @name StationsRead
     * @request GET:/stations/{id}
     * @secure
     */
    stationsRead: (id: string, params: RequestParams = {}) =>
      this.request<WeatherStation, any>({
        path: `/stations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags stations
     * @name StationsUpdate
     * @request PUT:/stations/{id}
     * @secure
     */
    stationsUpdate: (id: string, data: WeatherStation, params: RequestParams = {}) =>
      this.request<WeatherStation, any>({
        path: `/stations/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags stations
     * @name StationsDelete
     * @request DELETE:/stations/{id}
     * @secure
     */
    stationsDelete: (id: string, params: RequestParams = {}) =>
      this.request<WeatherStation, any>({
        path: `/stations/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  updateUserRole = {
    /**
     * No description
     *
     * @tags update_user_role
     * @name UpdateUserRoleCreate
     * @request POST:/update_user_role/{id}
     * @secure
     */
    updateUserRoleCreate: (id: string, data: WeStatsUserUpdateRole, params: RequestParams = {}) =>
      this.request<WeStatsUser, any>({
        path: `/update_user_role/${id}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  userorders = {
    /**
     * No description
     *
     * @tags userorders
     * @name UserordersList
     * @request GET:/userorders
     * @secure
     */
    userordersList: (params: RequestParams = {}) =>
      this.request<TotalOrderInfo[], any>({
        path: `/userorders`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags userorders
     * @name UserordersCurrentList
     * @request GET:/userorders/current
     * @secure
     */
    userordersCurrentList: (params: RequestParams = {}) =>
      this.request<TotalOrderInfo, any>({
        path: `/userorders/current`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags users
     * @name UsersList
     * @request GET:/users/
     * @secure
     */
    usersList: (params: RequestParams = {}) =>
      this.request<WeStatsUser[], any>({
        path: `/users/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Функция регистрации новых пользователей Если пользователя c указанным в request email ещё нет, в БД будет добавлен новый пользователь.
     *
     * @tags users
     * @name UsersCreate
     * @request POST:/users/
     * @secure
     */
    usersCreate: (data: WeStatsUser, params: RequestParams = {}) =>
      this.request<WeStatsUser, any>({
        path: `/users/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersRead
     * @request GET:/users/{user_id}/
     * @secure
     */
    usersRead: (userId: number, params: RequestParams = {}) =>
      this.request<WeStatsUser, any>({
        path: `/users/${userId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersUpdate
     * @request PUT:/users/{user_id}/
     * @secure
     */
    usersUpdate: (userId: number, data: WeStatsUser, params: RequestParams = {}) =>
      this.request<WeStatsUser, any>({
        path: `/users/${userId}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersPartialUpdate
     * @request PATCH:/users/{user_id}/
     * @secure
     */
    usersPartialUpdate: (userId: number, data: WeStatsUser, params: RequestParams = {}) =>
      this.request<WeStatsUser, any>({
        path: `/users/${userId}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersDelete
     * @request DELETE:/users/{user_id}/
     * @secure
     */
    usersDelete: (userId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/${userId}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}
