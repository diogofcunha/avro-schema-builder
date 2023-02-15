import {
  ArrayField,
  AvroSchemaBuilder,
  EnumField,
  FieldOrder,
  FixedField,
  MapField,
  PrimitiveField,
  RecordField,
} from '..';

test('should create primitive type arrays', () => {
  expect(
    new AvroSchemaBuilder('primitive')
      .record('record.array')
      .addField(
        new ArrayField({
          name: 'boolean_array',
          doc: 'boolean array',
          type: 'boolean',
          order: FieldOrder.descending,
        }),
      )
      .addField(
        new ArrayField({
          name: 'bytes_array',
          doc: 'bytes array',
          type: 'bytes',
          order: FieldOrder.ignore,
        }),
      )
      .addField(
        new ArrayField({
          name: 'double_array',
          doc: 'double array',
          type: 'double',
          order: FieldOrder.ignore,
        }),
      )
      .addField(
        new ArrayField({
          name: 'float_array',
          doc: 'float array',
          type: 'float',
          order: FieldOrder.ascending,
        }),
      )
      .addField(
        new ArrayField({
          name: 'int_array',
          doc: 'int array',
          type: 'int',
          order: FieldOrder.ascending,
        }),
      )
      .addField(
        new ArrayField({
          name: 'long_array',
          doc: 'long array',
          type: 'long',
          order: FieldOrder.ignore,
        }),
      )
      .addField(
        new ArrayField({
          name: 'string_array',
          doc: 'string array',
          type: 'string',
          order: FieldOrder.descending,
        }),
      )
      .compile(),
  ).toMatchInlineSnapshot(`
    {
      "fields": [
        {
          "name": "boolean_array",
          "type": {
            "items": "boolean",
            "type": "array",
          },
        },
        {
          "name": "bytes_array",
          "type": {
            "items": "bytes",
            "type": "array",
          },
        },
        {
          "name": "double_array",
          "type": {
            "items": "double",
            "type": "array",
          },
        },
        {
          "name": "float_array",
          "type": {
            "items": "float",
            "type": "array",
          },
        },
        {
          "name": "int_array",
          "type": {
            "items": "int",
            "type": "array",
          },
        },
        {
          "name": "long_array",
          "type": {
            "items": "long",
            "type": "array",
          },
        },
        {
          "name": "string_array",
          "type": {
            "items": "string",
            "type": "array",
          },
        },
      ],
      "name": "primitive",
      "namespace": "record.array",
      "type": "record",
    }
  `);
});

test('should create nullable type arrays', () => {
  expect(
    new AvroSchemaBuilder('primitive')
      .record('record.array')
      .addField(
        new ArrayField({
          name: 'boolean_array',
          doc: 'boolean array',
          type: 'boolean',
          order: FieldOrder.descending,
          nullable: true,
        }),
      )
      .addField(
        new ArrayField({
          name: 'bytes_array',
          doc: 'bytes array',
          type: 'bytes',
          order: FieldOrder.ignore,
        }),
      )
      .addField(
        new ArrayField({
          name: 'double_array',
          doc: 'double array',
          type: 'double',
          order: FieldOrder.ignore,
        }),
      )
      .addField(
        new ArrayField({
          name: 'float_array',
          doc: 'float array',
          type: 'float',
          order: FieldOrder.ascending,
        }),
      )
      .addField(
        new ArrayField({
          name: 'int_array',
          doc: 'int array',
          type: 'int',
          order: FieldOrder.ascending,
        }),
      )
      .addField(
        new ArrayField({
          name: 'long_array',
          doc: 'long array',
          type: 'long',
          order: FieldOrder.ignore,
        }),
      )
      .addField(
        new ArrayField({
          name: 'string_array',
          doc: 'string array',
          type: 'string',
          order: FieldOrder.descending,
        }),
      )
      .addField(
        new MapField({
          name: 'map_field',
          type: 'string',
        }),
      )
      .compile(),
  ).toMatchInlineSnapshot(`
    {
      "fields": [
        {
          "name": "boolean_array",
          "type": [
            "null",
            {
              "items": "boolean",
              "type": "array",
            },
          ],
        },
        {
          "name": "bytes_array",
          "type": {
            "items": "bytes",
            "type": "array",
          },
        },
        {
          "name": "double_array",
          "type": {
            "items": "double",
            "type": "array",
          },
        },
        {
          "name": "float_array",
          "type": {
            "items": "float",
            "type": "array",
          },
        },
        {
          "name": "int_array",
          "type": {
            "items": "int",
            "type": "array",
          },
        },
        {
          "name": "long_array",
          "type": {
            "items": "long",
            "type": "array",
          },
        },
        {
          "name": "string_array",
          "type": {
            "items": "string",
            "type": "array",
          },
        },
        {
          "name": "map_field",
          "type": {
            "type": "map",
            "values": "string",
          },
        },
      ],
      "name": "primitive",
      "namespace": "record.array",
      "type": "record",
    }
  `);
});

test('should create object type arrays', () => {
  expect(
    new AvroSchemaBuilder('primitive')
      .record('record.array')
      .addField(
        new ArrayField({
          name: 'boolean_array',
          doc: 'boolean array',
          order: FieldOrder.descending,
          type: new RecordField({
            namespace: 'record.array.obj',
            order: FieldOrder.ascending,
            name: 'non_null_obj',
            doc: 'non nullable object',
          }).addField(
            new PrimitiveField({
              name: 'integer_field',
              type: 'int',
              doc: 'integer field',
              order: FieldOrder.descending,
              defaultValue: 10,
            }),
          ),
        }),
      )
      .compile(),
  ).toMatchInlineSnapshot(`
    {
      "fields": [
        {
          "name": "boolean_array",
          "type": {
            "items": {
              "fields": [
                {
                  "default": 10,
                  "doc": "integer field",
                  "name": "integer_field",
                  "order": "descending",
                  "type": "int",
                },
              ],
              "name": "non_null_obj",
              "namespace": "record.array.obj",
              "type": "record",
            },
            "type": "array",
          },
        },
      ],
      "name": "primitive",
      "namespace": "record.array",
      "type": "record",
    }
  `);
});

test('should create enum type arrays', () => {
  expect(
    new AvroSchemaBuilder('enums')
      .record('enum.array')
      .addField(
        new ArrayField({
          name: 'enum_array',
          doc: 'enum array',
          order: FieldOrder.descending,
          type: new EnumField({
            name: 'enum_field_with_complete',
            type: ['v1', 'v2'],
            defaultValue: 'v2',
            aliases: ['enum_field_with_complete.previous'],
            doc: 'Enum Field with complete',
            namespace: 'enum.field.com',
            nullable: true,
          }),
        }),
      )
      .compile(),
  ).toMatchInlineSnapshot(`
    {
      "fields": [
        {
          "name": "enum_array",
          "type": {
            "items": {
              "aliases": [
                "enum_field_with_complete.previous",
              ],
              "default": "v2",
              "doc": "Enum Field with complete",
              "name": "enum_field_with_complete",
              "namespace": "enum.field.com",
              "symbols": [
                "v1",
                "v2",
              ],
              "type": "enum",
            },
            "type": "array",
          },
        },
      ],
      "name": "enums",
      "namespace": "enum.array",
      "type": "record",
    }
  `);
});

test('should create fixed type arrays', () => {
  expect(
    new AvroSchemaBuilder('fixed')
      .record('fixed.array')
      .addField(
        new ArrayField({
          name: 'fixed_array',
          doc: 'fixed array',
          order: FieldOrder.descending,
          type: new FixedField({
            name: 'fixed_field',
            size: 12352,
            aliases: ['fixed.array.old'],
          }),
        }),
      )
      .compile(),
  ).toMatchInlineSnapshot(`
    {
      "fields": [
        {
          "name": "fixed_array",
          "type": {
            "items": {
              "aliases": [
                "fixed.array.old",
              ],
              "name": "fixed_field",
              "size": 12352,
              "type": "fixed",
            },
            "type": "array",
          },
        },
      ],
      "name": "fixed",
      "namespace": "fixed.array",
      "type": "record",
    }
  `);
});
