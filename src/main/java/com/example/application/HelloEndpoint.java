package com.example.application;

import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;
import dev.hilla.Nonnull;

@Endpoint
@AnonymousAllowed
public class HelloEndpoint {

    @Nonnull
    public String sayHello(String name) {
        if (name == null || name.isEmpty()) {
            return "Hello anonymous";
        } else {
            return "Server says hello to " + name;
        }
    }
}