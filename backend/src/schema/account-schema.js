const
    accountSchema =
        { type: "object",
            properties:
                { /*id:       { type: ["null", "string"],  format: "uuid", },*/
                    name:     { type: ["null", "string"],  },
                    email:    { type: ["null", "string"],  /*format: "email",*/ }, // email is checked by postgres
                    user:     { type: ["null", "string"],  },
                    password: { type: ["null", "string"],  },
                    isAdmin:  { type: ["null", "boolean"], default: false, },
                },
        };

export default accountSchema
