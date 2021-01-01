using System;

namespace Models
{
    public class House
    {
        public House () { }

        public int Id { get; set; }
        public string Street { get; set; }
        public string Neighborhood { get; set; }
        public string City { get; set; }
        public string State { get; set; }

        public static List<House> getAll()
        {
            var list = new List<House>();

            SqlConnection connect = new SqlConnection(Connection.Data);
            connect.Open();

            SqlCommand cmd = new SqlCommand("select * FROM Houses", connect);

            SqlDataReader reader = cmd.ExecuteReader();

            while(reader.Read())
            {
                list.add(new House
                {
                    Id = Convert.ToInt32(reader["Id"]),
                    Street = reader["Street"].ToString(),
                    Neighborhood = reader["Neighborhood"].ToString(),
                    City = reader["City"].ToString(),
                    State = reader["State"].ToString()
                });
            }
            connect.Close();
            connect.Dispose();
            cmd.Dispose();

            return list;
        }
    }
}