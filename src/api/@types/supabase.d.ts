/* eslint-disable @typescript-eslint/no-empty-object-type */

// JSON 타입 정의
export type JSONValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JSONValue | undefined }
  | JSONValue[];

// 데이터베이스 구조 정의
export type DBSchema = {
  graphql_public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: JSONValue;
          extensions?: JSONValue;
        };
        Returns: JSONValue;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
  public: {
    Tables: {
      todo: {
        Row: {
          completed: boolean;
          createdAt: string;
          id: string;
          title: string;
          updatedAt: string | null;
        };
        Insert: {
          completed?: boolean;
          createdAt: string;
          id?: string;
          title: string;
          updatedAt?: string | null;
        };
        Update: {
          completed?: boolean;
          createdAt?: string;
          id?: string;
          title?: string;
          updatedAt?: string | null;
        };
        Relationships: never[];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

// public 스키마 타입 추출
type PublicSchema = DBSchema[Extract<keyof DBSchema, "public">];

// 테이블 관련 타입 추출
export type TableData<
  TableOption extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof DBSchema },
  TableName extends TableOption extends { schema: keyof DBSchema }
    ? keyof (DBSchema[TableOption["schema"]]["Tables"] & DBSchema[TableOption["schema"]]["Views"])
    : never = never
> = TableOption extends { schema: keyof DBSchema }
  ? (DBSchema[TableOption["schema"]]["Tables"] & DBSchema[TableOption["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : TableOption extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  ? (PublicSchema["Tables"] & PublicSchema["Views"])[TableOption] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

// 테이블에 삽입되는 데이터 타입 추출
export type TableInsert<
  TableOption extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof DBSchema },
  TableName extends TableOption extends { schema: keyof DBSchema }
    ? keyof DBSchema[TableOption["schema"]]["Tables"]
    : never = never
> = TableOption extends { schema: keyof DBSchema }
  ? DBSchema[TableOption["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : TableOption extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][TableOption] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

// 테이블에 대한 업데이트 타입 추출
export type TableUpdate<
  TableOption extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof DBSchema },
  TableName extends TableOption extends { schema: keyof DBSchema }
    ? keyof DBSchema[TableOption["schema"]]["Tables"]
    : never = never
> = TableOption extends { schema: keyof DBSchema }
  ? DBSchema[TableOption["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : TableOption extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][TableOption] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

// Enum 관련 타입 추출
export type EnumData<
  EnumOption extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof DBSchema },
  EnumName extends EnumOption extends { schema: keyof DBSchema }
    ? keyof DBSchema[EnumOption["schema"]]["Enums"]
    : never = never
> = EnumOption extends { schema: keyof DBSchema }
  ? DBSchema[EnumOption["schema"]]["Enums"][EnumName]
  : EnumOption extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][EnumOption]
  : never;

// 복합 타입 관련 타입 추출
export type CompositeTypeData<
  CompositeOption extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof DBSchema },
  CompositeTypeName extends CompositeOption extends {
    schema: keyof DBSchema;
  }
    ? keyof DBSchema[CompositeOption["schema"]]["CompositeTypes"]
    : never = never
> = CompositeOption extends { schema: keyof DBSchema }
  ? DBSchema[CompositeOption["schema"]]["CompositeTypes"][CompositeTypeName]
  : CompositeOption extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][CompositeOption]
  : never;
