
# Digital Community BD

This is the api documentation of Digital Community BD project.


## API Reference

### Member
#### Add a member

```
  POST /api/chairmanOrMember/member/add
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name |
| `phone` | `string` | **Required**. Mobile number |
| `photo` | `file` | **Required**. form-data field photo |

#### Get Member

```
  GET /api/chairmanOrMember/member/get
```
### Chairman
#### Add a Chairman

```
  POST /api/chairmanOrMember/chairman/add
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name |
| `phone` | `string` | **Required**. Mobile number |
| `photo` | `file` | **Required**. form-data field photo |

#### Get All chairman

```
  GET /api/chairmanOrMember/chairman/get
```



### Union
#### Add a Union

```
  POST /api/union/add
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name |
| `chairman_id` | `int` | **Required**. Get this id from chairman list |
| `up_id` | `int` | **Required**. Put up_id value 1 |
| `photo` | `file` | **Required**. form-data field photo |

#### Get all union

```
  GET /api/union/get
```
#### Get a union

```
  GET /api/union/getUnion/{union_id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `union_id` | `int` | **Required**. 1, 2, 3 etc |

### Village
#### Add a village

```
  POST /api/village/add
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Village Name |
| `ward_no` | `int` | **Required**. 1, 2, 3 etc |
| `member_id` | `int` | **Required**. 1, 2, 3 etc |
| `union_id` | `int` | **Required**. 1, 2, 3 etc |
| `up_id` | `int` | **Required**. Pass 1 as up_id |
| `photo` | `file` | **Required**. form-data field photo |

#### Get All village

```
  GET /api/village/get
```

#### Get a village

```
  GET /api/village/getVillbyId/{village_id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `village_id` | `int` | **Required**. 1, 2, 3 etc |






