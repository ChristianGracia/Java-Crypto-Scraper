import java.io.File;
import java.io.IOException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ExtractJson {
	
	public static void main(String[] args) throws JsonParseException, JsonMappingException, IOException 
	{
		 ObjectMapper o=new ObjectMapper();
		 CoinDetailsBCash c = o.readValue(new File("C:\\Users\\chris\\eclipse-workspace\\JSON\\coinInfoBcash.json"), CoinDetailsBCash.class);
	     System.out.println(c.getBuyerName());
	}

}
