package hcmut.hcmut_spss.Securities;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
//@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WhiteList {
    private String[] WHITE_LIST_URL = {
        "/index",
        "/about",
        "/login",
        "/403",
        "/api/authenticate"
    };

    private String[] RESOURCE_LIST_URL = {
        "/css",
        "/fonts",
        "/images",
        "/js",
        "/mail",
        "/lists",
        "/products"
    };

    // public String[] get_WHITE_LIST_URL(){
    //     return WHITE_LIST_URL;
    // }
}