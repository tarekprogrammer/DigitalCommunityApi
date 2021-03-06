# Digital Community BD

This is the api documentation of Digital Community BD project.

## API Reference

### Member

#### Add a member

```
  POST /api/chairmanOrMember/member/add
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `name`    | `string` | **Required**. Name                  |
| `phone`   | `string` | **Required**. Mobile number         |
| `photo`   | `file`   | **Required**. form-data field photo |

#### Get Member

```
  GET /api/chairmanOrMember/member/get
```

### Chairman

#### Add a Chairman

```
  POST /api/chairmanOrMember/chairman/add
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `name`    | `string` | **Required**. Name                  |
| `phone`   | `string` | **Required**. Mobile number         |
| `photo`   | `file`   | **Required**. form-data field photo |

#### Get All chairman

```
  GET /api/chairmanOrMember/chairman/get
```

### Union

#### Add a Union

```
  POST /api/union/add
```

| Parameter     | Type     | Description                                  |
| :------------ | :------- | :------------------------------------------- |
| `name`        | `string` | **Required**. Name                           |
| `chairman_id` | `int`    | **Required**. Get this id from chairman list |
| `up_id`       | `int`    | **Required**. Put up_id value 1              |
| `photo`       | `file`   | **Required**. form-data field photo          |

#### Get all union

```
  GET /api/union/get
```

#### Get a union

```
  GET /api/union/getUnion/{union_id}
```

| Parameter  | Type  | Description               |
| :--------- | :---- | :------------------------ |
| `union_id` | `int` | **Required**. 1, 2, 3 etc |

### Village

#### Add a village

```
  POST /api/village/add
```

| Parameter   | Type     | Description                         |
| :---------- | :------- | :---------------------------------- |
| `name`      | `string` | **Required**. Village Name          |
| `ward_no`   | `int`    | **Required**. 1, 2, 3 etc           |
| `member_id` | `int`    | **Required**. 1, 2, 3 etc           |
| `union_id`  | `int`    | **Required**. 1, 2, 3 etc           |
| `up_id`     | `int`    | **Required**. Pass 1 as up_id       |
| `photo`     | `file`   | **Required**. form-data field photo |

#### Get All village

```
  GET /api/village/get
```

#### Get a village

```
  GET /api/village/getVillbyId/{village_id}
```

| Parameter    | Type  | Description               |
| :----------- | :---- | :------------------------ |
| `village_id` | `int` | **Required**. 1, 2, 3 etc |

### Place:

#### Add a place

```
  POST /api/place/add
```

| Parameter       | Type     | Description                         |
| :-------------- | :------- | :---------------------------------- |
| `name`          | `string` | **Required**. Name                  |
| `place_details` | `string` | Required                            |
| `village_id`    | `int`    | Required                            |
| `photo`         | `file`   | **Required**. form-data field photo |

#### Get places by up id

```
  GET /api/place/getPlacesByUpId/{up_id}
```

#### Get place by place id

```
  GET /api/place/placeByPlaceId/{place_id}
```

### Route

#### Add a route

```
  POST /api/route/add
```

| Parameter             | Type     | Description |
| :-------------------- | :------- | :---------- |
| `start_address`       | `string` |             |
| `destination_address` | `string` |             |

#### Get all route

```
  GET /api/route/get
```

### Transport

#### Add a transport

```
  POST /api/transport/add
```

| Parameter       | Type     | Description                                                    |
| :-------------- | :------- | :------------------------------------------------------------- |
| `type`          | `string` | Schedule car, Rent a car, Ambulance values are [`sc, rc, amb`] |
| `name_or_model` | `string` |                                                                |
| `reg_no`        | `string` |                                                                |
| `phone_number`  | `string` |                                                                |
| `address`       | `string` |                                                                |
| `facility`      | `string` |                                                                |
| `route_id`      | `int`    | find `route_id` from route list                                |
| `start_time`    | `string` |                                                                |

#### Get all schedule car

```
  GET /api/transport/getSc
```

#### Get all Rent car

```
  GET /api/transport/getRc
```

#### Get all Ambulance

```
  GET /api/transport/getAmb
```

### Health Care Service

#### Add a health care

```
  POST /api/healthcare/add
```

| Parameter    | Type     | Description                              |
| :----------- | :------- | :--------------------------------------- |
| `type`       | `string` | Types are {`clinic, hospital, pharmacy`} |
| `name`       | `String` |                                          |
| `village_id` | `int`    | 1, 2, 3 etc                              |
| `phone`      | `string` |                                          |
| `details`    | `string` |                                          |
| `photo`      | `file`   | `form-data` field photo                  |

#### Get healthcare by type

```
  GET /api/healthcare/getByType/{type}
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `type`    | `string` | Types are {`clinic, hospital, pharmacy`} |

### Doctor:

#### Add a doctor

```
  POST /api/doctor/add
```

| Parameter    | Type     | Description             |
| :----------- | :------- | :---------------------- |
| `name`       | `string` |                         |
| `specialist` | `string` |                         |
| `degree`     | `String` |                         |
| `phone`      | `String` |                         |
| `photo`      | `file`   | `form-data` field photo |

#### Get all doctor

```
  GET /api/doctor/get
```

#### Assign a doctor

```
  POST /api/healthcare/assigndoctor
```

| Parameter        | Type     | Description                                           |
| :--------------- | :------- | :---------------------------------------------------- |
| `health_care_id` | `int`    |                                                       |
| `doctor_id`      | `int`    |                                                       |
| `schedule`       | `string` | 4:30 PM to 9:30 PM Friday , 4:30 PM to 9:30 PM Sunday |

### Education

#### Add an education institute

```
  POST /api/educational/add
```

| Parameter    | Type     | Description                                                          |
| :----------- | :------- | :------------------------------------------------------------------- |
| `name`       | `string` |                                                                      |
| `type`       | `string` | types are {`Primary School, High School, Collage, Madrasha, Others`} |
| `village_id` | `int`    |                                                                      |
| `photo`      | `file`   |                                                                      |
| `details`    | `String` |                                                                      |

#### Get all route

```
  GET /api/educational/getbytype/{type}
```

| Parameter | Type     | Description                                                          |
| :-------- | :------- | :------------------------------------------------------------------- |
| `type`    | `string` | types are {`Primary School, High School, Collage, Madrasha, Others`} |

### Emergency

#### Add a emergency

```
  POST /api/emergency/add
```

| Parameter | Type     | Description          |
| :-------- | :------- | :------------------- |
| `type`    | `string` | write emergency type |
| `photo`   | `file`   |                      |
| `phone`   | `string` |                      |
| `address` | `string` |                      |

#### Get all emergency

```
  GET /api/emergency/get
```

### Career

#### Add a career

```
  POST /api/career/add
```

| Parameter | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `name`    | `String` |                         |
| `url`     | `string` |                         |
| `photo`   | `file`   | `form-data` field photo |

#### Get all career

```
  GET /api/career/get
```

### Newspaper

#### Add a newspaper

```
  POST /api/news/add
```

| Parameter | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `name`    | `String` |                         |
| `url`     | `string` |                         |
| `photo`   | `file`   | `form-data` field photo |

#### Get all news

```
  GET /api/news/get
```
